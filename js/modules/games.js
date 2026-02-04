import { TETRIS_ROWS, TETRIS_COLS, TETRIS_SHAPES, TETRIS_COLORS, CHESS_STARTING_BOARD } from './config.js';
import { createMatrix, cloneMatrix, loadGameStats, persistGameStats } from './utils.js';

// DOM Elements
const gamesTabEls = document.querySelectorAll('.games-tab');
const gamePanelEls = document.querySelectorAll('.game-panel');
const tetrisCanvas = document.getElementById('tetrisCanvas');
const tetrisScoreEl = document.getElementById('tetrisScore');
const tetrisBestEl = document.getElementById('tetrisBest');
const tetrisStartBtn = document.getElementById('tetrisStart');
const chessBoardEl = document.getElementById('chessBoard');
const chessStatusEl = document.getElementById('chessStatus');
const chessWinsEl = document.getElementById('chessWins');
const chessLossesEl = document.getElementById('chessLosses');
const chessRestartBtn = document.getElementById('chessRestart');

// Game state
let gameStats = loadGameStats();
let activeGameId = 'tetris';

// Tetris state
let tetrisCtx = null;
let tetrisBoard = [];
let tetrisPiece = null;
let tetrisScore = 0;
let tetrisDropCounter = 0;
let tetrisDropInterval = 1000;
let tetrisLastTime = 0;
let tetrisAnimationFrame = null;
let tetrisRunning = false;
let tetrisPaused = false;
let tetrisGameOver = false;

// Chess state
let chessBoardState = null;
let chessTurn = 'white';
let chessSelected = null;
let chessMoves = [];
let chessGameOver = false;

// ======= Tetris Functions =======

function createTetrisPiece(type) {
  return {
    matrix: cloneMatrix(TETRIS_SHAPES[type]),
    pos: { x: Math.floor(TETRIS_COLS / 2) - 1, y: 0 },
    type,
  };
}

function randomTetromino() {
  const keys = Object.keys(TETRIS_SHAPES);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return createTetrisPiece(keys[randomIndex]);
}

function drawCell(ctx, x, y, color) {
  const blockSize = Math.floor(tetrisCanvas.width / TETRIS_COLS);
  ctx.fillStyle = color;
  ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.strokeRect(x * blockSize + 0.5, y * blockSize + 0.5, blockSize - 1, blockSize - 1);
}

function drawTetrisBoard() {
  if (!tetrisCtx) {
    return;
  }
  tetrisCtx.clearRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
  for (let y = 0; y < TETRIS_ROWS; y += 1) {
    for (let x = 0; x < TETRIS_COLS; x += 1) {
      const cell = tetrisBoard[y][x];
      if (cell) {
        drawCell(tetrisCtx, x, y, TETRIS_COLORS[cell]);
      }
    }
  }
  if (tetrisPiece) {
    for (let y = 0; y < tetrisPiece.matrix.length; y += 1) {
      for (let x = 0; x < tetrisPiece.matrix[y].length; x += 1) {
        if (tetrisPiece.matrix[y][x]) {
          const drawX = x + tetrisPiece.pos.x;
          const drawY = y + tetrisPiece.pos.y;
          if (drawY >= 0) {
            drawCell(tetrisCtx, drawX, drawY, TETRIS_COLORS[tetrisPiece.type]);
          }
        }
      }
    }
  }
}

function mergeTetrisPiece() {
  for (let y = 0; y < tetrisPiece.matrix.length; y += 1) {
    for (let x = 0; x < tetrisPiece.matrix[y].length; x += 1) {
      if (tetrisPiece.matrix[y][x]) {
        const boardY = y + tetrisPiece.pos.y;
        const boardX = x + tetrisPiece.pos.x;
        if (boardY >= 0 && boardY < TETRIS_ROWS && boardX >= 0 && boardX < TETRIS_COLS) {
          tetrisBoard[boardY][boardX] = tetrisPiece.type;
        }
      }
    }
  }
}

function tetrisCollides(pos = tetrisPiece.pos, matrix = tetrisPiece.matrix) {
  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      if (!matrix[y][x]) {
        continue;
      }
      const boardY = y + pos.y;
      const boardX = x + pos.x;
      if (boardX < 0 || boardX >= TETRIS_COLS || boardY >= TETRIS_ROWS) {
        return true;
      }
      if (boardY >= 0 && tetrisBoard[boardY][boardX]) {
        return true;
      }
    }
  }
  return false;
}

function rotateMatrix(matrix, direction) {
  const size = matrix.length;
  const result = matrix.map((row, rowIndex) => row.map((_, colIndex) => matrix[size - colIndex - 1][rowIndex]));
  if (direction > 0) {
    return result;
  }
  return result.map((row) => row.reverse());
}

function tetrisRotate(direction) {
  if (!tetrisPiece) {
    return;
  }
  const rotated = rotateMatrix(tetrisPiece.matrix, direction);
  let offset = 0;
  while (tetrisCollides({ x: tetrisPiece.pos.x + offset, y: tetrisPiece.pos.y }, rotated)) {
    offset = offset ? -(offset + Math.sign(offset)) : 1;
    if (Math.abs(offset) > rotated[0].length) {
      return;
    }
  }
  tetrisPiece.matrix = rotated;
  tetrisPiece.pos.x += offset;
}

function updateTetrisScoreboard() {
  if (tetrisScoreEl) {
    tetrisScoreEl.textContent = String(tetrisScore);
  }
  if (gameStats.tetrisBest == null) {
    gameStats.tetrisBest = 0;
  }
  if (tetrisScore > gameStats.tetrisBest) {
    gameStats = { ...gameStats, tetrisBest: tetrisScore };
    persistGameStats(gameStats);
  }
  if (tetrisBestEl) {
    tetrisBestEl.textContent = String(gameStats.tetrisBest || 0);
  }
}

function clearTetrisLines() {
  let lines = 0;
  for (let y = TETRIS_ROWS - 1; y >= 0; y -= 1) {
    if (tetrisBoard[y].every((cell) => cell)) {
      const removed = tetrisBoard.splice(y, 1)[0];
      removed.fill(0);
      tetrisBoard.unshift(removed);
      lines += 1;
      y += 1;
    }
  }
  if (lines > 0) {
    const scores = [0, 100, 300, 700, 1500];
    tetrisScore += scores[Math.min(lines, scores.length - 1)];
    tetrisDropInterval = Math.max(250, tetrisDropInterval - lines * 20);
    updateTetrisScoreboard();
  }
}

function resetTetrisBoard() {
  tetrisBoard = createMatrix(TETRIS_ROWS, TETRIS_COLS, 0);
}

function spawnTetrisPiece() {
  tetrisPiece = randomTetromino();
  tetrisPiece.pos.y = -1;
  tetrisPiece.pos.x = Math.floor(TETRIS_COLS / 2) - Math.ceil(tetrisPiece.matrix[0].length / 2);
  if (tetrisCollides()) {
    tetrisRunning = false;
    tetrisGameOver = true;
    updateTetrisScoreboard();
  }
}

function playerDrop() {
  if (!tetrisPiece) {
    return;
  }
  tetrisPiece.pos.y += 1;
  if (tetrisCollides()) {
    tetrisPiece.pos.y -= 1;
    mergeTetrisPiece();
    clearTetrisLines();
    spawnTetrisPiece();
  }
  tetrisDropCounter = 0;
}

function hardDrop() {
  if (!tetrisPiece) {
    return;
  }
  while (!tetrisCollides({ x: tetrisPiece.pos.x, y: tetrisPiece.pos.y + 1 })) {
    tetrisPiece.pos.y += 1;
  }
  playerDrop();
}

function playerMove(direction) {
  if (!tetrisPiece) {
    return;
  }
  tetrisPiece.pos.x += direction;
  if (tetrisCollides()) {
    tetrisPiece.pos.x -= direction;
  }
}

function updateTetris(time = 0) {
  if (!tetrisRunning) {
    return;
  }
  tetrisAnimationFrame = window.requestAnimationFrame(updateTetris);
  const delta = time - tetrisLastTime;
  tetrisLastTime = time;
  if (tetrisPaused) {
    tetrisDropCounter = 0;
    drawTetrisBoard();
    return;
  }
  tetrisDropCounter += delta;
  if (tetrisDropCounter > tetrisDropInterval) {
    playerDrop();
  }
  drawTetrisBoard();
  if (tetrisGameOver) {
    window.cancelAnimationFrame(tetrisAnimationFrame);
  }
}

function startTetrisGame() {
  if (!tetrisCtx) {
    return;
  }
  tetrisScore = 0;
  tetrisDropInterval = 1000;
  tetrisDropCounter = 0;
  tetrisLastTime = 0;
  tetrisGameOver = false;
  resetTetrisBoard();
  spawnTetrisPiece();
  updateTetrisScoreboard();
  tetrisRunning = true;
  tetrisPaused = activeGameId !== 'tetris';
  if (tetrisAnimationFrame) {
    window.cancelAnimationFrame(tetrisAnimationFrame);
  }
  updateTetris(0);
}

function handleTetrisKeydown(event) {
  if (!tetrisRunning || tetrisGameOver || activeGameId !== 'tetris') {
    return;
  }
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault();
      playerMove(-1);
      break;
    case 'ArrowRight':
      event.preventDefault();
      playerMove(1);
      break;
    case 'ArrowDown':
      event.preventDefault();
      playerDrop();
      break;
    case 'ArrowUp':
      event.preventDefault();
      tetrisRotate(1);
      break;
    case ' ': {
      event.preventDefault();
      hardDrop();
      break;
    }
    default:
  }
}

// ======= Chess Functions =======

function isValidChessBoard(board) {
  return Array.isArray(board) && board.length === 8 && board.every((row) => Array.isArray(row) && row.length === 8);
}

function initializeChessState() {
  const storedBoard = gameStats.chessBoard;
  if (isValidChessBoard(storedBoard)) {
    chessBoardState = storedBoard.map((row) => row.slice());
  } else {
    chessBoardState = CHESS_STARTING_BOARD.map((row) => row.slice());
  }
  chessTurn = gameStats.chessTurn === 'black' ? 'black' : 'white';
  chessSelected = null;
  chessMoves = [];
  chessGameOver = false;
}

function getPieceColor(piece) {
  if (!piece) {
    return null;
  }
  return piece === piece.toUpperCase() ? 'white' : 'black';
}

function isOnBoard(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

function addSlideMoves(board, row, col, color, deltas, moves) {
  deltas.forEach(([dRow, dCol]) => {
    let currentRow = row + dRow;
    let currentCol = col + dCol;
    while (isOnBoard(currentRow, currentCol)) {
      const target = board[currentRow][currentCol];
      if (!target) {
        moves.push({ row: currentRow, col: currentCol, capture: false });
      } else {
        if (getPieceColor(target) !== color) {
          moves.push({ row: currentRow, col: currentCol, capture: true });
        }
        break;
      }
      currentRow += dRow;
      currentCol += dCol;
    }
  });
}

function getValidChessMoves(board, row, col, turn) {
  const piece = board[row][col];
  if (!piece) {
    return [];
  }
  const color = getPieceColor(piece);
  if (turn && color !== turn) {
    return [];
  }
  const moves = [];
  const lower = piece.toLowerCase();
  if (lower === 'p') {
    const direction = color === 'white' ? -1 : 1;
    const startRow = color === 'white' ? 6 : 1;
    const oneStepRow = row + direction;
    if (isOnBoard(oneStepRow, col) && !board[oneStepRow][col]) {
      moves.push({ row: oneStepRow, col, capture: false });
      const twoStepRow = row + direction * 2;
      if (row === startRow && !board[twoStepRow][col]) {
        moves.push({ row: twoStepRow, col, capture: false });
      }
    }
    [col - 1, col + 1].forEach((targetCol) => {
      const targetRow = row + direction;
      if (!isOnBoard(targetRow, targetCol)) {
        return;
      }
      const targetPiece = board[targetRow][targetCol];
      if (targetPiece && getPieceColor(targetPiece) !== color) {
        moves.push({ row: targetRow, col: targetCol, capture: true });
      }
    });
    return moves;
  }
  if (lower === 'n') {
    const knightSteps = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];
    knightSteps.forEach(([dRow, dCol]) => {
      const targetRow = row + dRow;
      const targetCol = col + dCol;
      if (!isOnBoard(targetRow, targetCol)) {
        return;
      }
      const target = board[targetRow][targetCol];
      if (!target || getPieceColor(target) !== color) {
        moves.push({ row: targetRow, col: targetCol, capture: Boolean(target) });
      }
    });
    return moves;
  }
  if (lower === 'k') {
    for (let dRow = -1; dRow <= 1; dRow += 1) {
      for (let dCol = -1; dCol <= 1; dCol += 1) {
        if (dRow === 0 && dCol === 0) {
          continue;
        }
        const targetRow = row + dRow;
        const targetCol = col + dCol;
        if (!isOnBoard(targetRow, targetCol)) {
          continue;
        }
        const target = board[targetRow][targetCol];
        if (!target || getPieceColor(target) !== color) {
          moves.push({ row: targetRow, col: targetCol, capture: Boolean(target) });
        }
      }
    }
    return moves;
  }
  if (lower === 'b' || lower === 'q') {
    addSlideMoves(
      board,
      row,
      col,
      color,
      [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ],
      moves,
    );
  }
  if (lower === 'r' || lower === 'q') {
    addSlideMoves(
      board,
      row,
      col,
      color,
      [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ],
      moves,
    );
  }
  return moves;
}

function pieceToGlyph(piece) {
  const glyphs = {
    K: '♔',
    Q: '♕',
    R: '♖',
    B: '♗',
    N: '♘',
    P: '♙',
    k: '♚',
    q: '♛',
    r: '♜',
    b: '♝',
    n: '♞',
    p: '♟',
  };
  return glyphs[piece] || '';
}

function moveChessPiece(board, fromRow, fromCol, toRow, toCol) {
  const piece = board[fromRow][fromCol];
  board[fromRow][fromCol] = '';
  board[toRow][toCol] = piece;
  if (piece === 'P' && toRow === 0) {
    board[toRow][toCol] = 'Q';
  } else if (piece === 'p' && toRow === 7) {
    board[toRow][toCol] = 'q';
  }
}

function updateChessScoreboard() {
  if (chessWinsEl) {
    chessWinsEl.textContent = String(gameStats.chessWins || 0);
  }
  if (chessLossesEl) {
    chessLossesEl.textContent = String(gameStats.chessLosses || 0);
  }
}

function setChessStatus(message) {
  if (chessStatusEl) {
    chessStatusEl.textContent = message;
  }
}

function renderChessBoard() {
  if (!chessBoardEl) {
    return;
  }
  chessBoardEl.innerHTML = '';
  chessBoardState.forEach((row, rowIndex) => {
    row.forEach((piece, colIndex) => {
      const cell = document.createElement('div');
      cell.className = `chess-cell ${(rowIndex + colIndex) % 2 === 0 ? 'is-light' : 'is-dark'}`;
      cell.dataset.pos = `${rowIndex}-${colIndex}`;
      cell.setAttribute('role', 'gridcell');
      const glyph = pieceToGlyph(piece);
      if (glyph) {
        const span = document.createElement('span');
        span.textContent = glyph;
        span.setAttribute('aria-hidden', 'true');
        cell.append(span);
        cell.setAttribute('aria-label', `${getPieceColor(piece)} ${piece.toLowerCase()}`);
      } else {
        const span = document.createElement('span');
        span.textContent = '';
        span.setAttribute('aria-hidden', 'true');
        cell.append(span);
        cell.setAttribute('aria-label', 'Empty square');
      }
      if (chessSelected && chessSelected.row === rowIndex && chessSelected.col === colIndex) {
        cell.classList.add('is-highlight');
      }
      if (chessMoves.some((move) => move.row === rowIndex && move.col === colIndex)) {
        cell.classList.add('is-move');
      }
      chessBoardEl.append(cell);
    });
  });
}

function findPiece(board, target) {
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      if (board[row][col] === target) {
        return true;
      }
    }
  }
  return false;
}

function saveChessState() {
  gameStats = {
    ...gameStats,
    chessBoard: chessBoardState.map((row) => row.slice()),
    chessTurn,
  };
  persistGameStats(gameStats);
}

function handlePlayerWin() {
  gameStats = { ...gameStats, chessWins: (gameStats.chessWins || 0) + 1 };
  chessGameOver = true;
  updateChessScoreboard();
  setChessStatus('Checkmate! You won this round.');
  persistGameStats(gameStats);
}

function handlePlayerLoss() {
  gameStats = { ...gameStats, chessLosses: (gameStats.chessLosses || 0) + 1 };
  chessGameOver = true;
  updateChessScoreboard();
  setChessStatus('Our bunny rival won this time. Try again!');
  persistGameStats(gameStats);
}

function performAiMove() {
  if (chessGameOver) {
    return;
  }
  const aiMoves = [];
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const piece = chessBoardState[row][col];
      if (piece && getPieceColor(piece) === 'black') {
        const moves = getValidChessMoves(chessBoardState, row, col, 'black');
        moves.forEach((move) => {
          aiMoves.push({ fromRow: row, fromCol: col, ...move });
        });
      }
    }
  }
  if (!aiMoves.length) {
    handlePlayerWin();
    saveChessState();
    renderChessBoard();
    return;
  }
  const captureMoves = aiMoves.filter((move) => move.capture);
  const movePool = captureMoves.length ? captureMoves : aiMoves;
  const selectedMove = movePool[Math.floor(Math.random() * movePool.length)];
  moveChessPiece(chessBoardState, selectedMove.fromRow, selectedMove.fromCol, selectedMove.row, selectedMove.col);
  if (!findPiece(chessBoardState, 'K')) {
    handlePlayerLoss();
  }
  chessTurn = 'white';
  chessSelected = null;
  chessMoves = [];
  saveChessState();
  renderChessBoard();
  if (!chessGameOver) {
    setChessStatus('Your turn! Choose your next move.');
  }
}

function completePlayerMove(targetRow, targetCol) {
  if (!chessSelected) {
    return;
  }
  moveChessPiece(chessBoardState, chessSelected.row, chessSelected.col, targetRow, targetCol);
  if (!findPiece(chessBoardState, 'k')) {
    handlePlayerWin();
    saveChessState();
    renderChessBoard();
    return;
  }
  chessTurn = 'black';
  chessSelected = null;
  chessMoves = [];
  saveChessState();
  renderChessBoard();
  if (!chessGameOver) {
    setChessStatus('Bunny rival is thinking...');
    window.setTimeout(performAiMove, 520);
  }
}

function handleChessBoardClick(event) {
  if (!chessBoardEl || chessGameOver || chessTurn !== 'white') {
    return;
  }
  const cell = event.target.closest('.chess-cell');
  if (!cell) {
    return;
  }
  const [row, col] = cell.dataset.pos.split('-').map((value) => Number.parseInt(value, 10));
  if (!Number.isInteger(row) || !Number.isInteger(col)) {
    return;
  }
  if (chessSelected && chessMoves.some((move) => move.row === row && move.col === col)) {
    completePlayerMove(row, col);
    return;
  }
  const piece = chessBoardState[row][col];
  if (piece && getPieceColor(piece) === 'white') {
    chessSelected = { row, col };
    chessMoves = getValidChessMoves(chessBoardState, row, col, 'white');
    renderChessBoard();
  } else {
    chessSelected = null;
    chessMoves = [];
    renderChessBoard();
  }
}

function resetChessGame() {
  chessBoardState = CHESS_STARTING_BOARD.map((row) => row.slice());
  chessTurn = 'white';
  chessSelected = null;
  chessMoves = [];
  chessGameOver = false;
  saveChessState();
  renderChessBoard();
  setChessStatus('Ready for a friendly duel.');
}

function setActiveGame(gameId) {
  activeGameId = gameId;
  gamesTabEls.forEach((tab) => {
    const isActive = tab.dataset.game === gameId;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
  gamePanelEls.forEach((panel) => {
    const isActive = panel.dataset.gamePanel === gameId;
    panel.classList.toggle('is-active', isActive);
    panel.toggleAttribute('hidden', !isActive);
  });
  tetrisPaused = gameId !== 'tetris';
}

export function initGames() {
  if (gamesTabEls.length) {
    gamesTabEls.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetGame = tab.dataset.game;
        if (targetGame) {
          setActiveGame(targetGame);
          if (targetGame === 'chess' && !chessGameOver && chessTurn === 'black') {
            setChessStatus('Bunny rival is thinking...');
            window.setTimeout(performAiMove, 400);
          }
        }
      });
    });
  }
  if (tetrisCanvas) {
    tetrisCtx = tetrisCanvas.getContext('2d');
    resetTetrisBoard();
    drawTetrisBoard();
    updateTetrisScoreboard();
    if (tetrisStartBtn) {
      tetrisStartBtn.addEventListener('click', () => {
        startTetrisGame();
      });
    }
    window.addEventListener('keydown', handleTetrisKeydown);
  }
  if (chessBoardEl) {
    initializeChessState();
    updateChessScoreboard();
    renderChessBoard();
    if (chessTurn === 'black' && !chessGameOver) {
      setChessStatus('Bunny rival is thinking...');
      window.setTimeout(performAiMove, 600);
    } else {
      setChessStatus('Ready for a friendly duel.');
    }
    chessBoardEl.addEventListener('click', handleChessBoardClick);
    if (chessRestartBtn) {
      chessRestartBtn.addEventListener('click', () => {
        resetChessGame();
      });
    }
  }
  setActiveGame('tetris');
}
