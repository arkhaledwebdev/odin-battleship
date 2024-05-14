import createBoard from "./creators/create_board";
import "./style.css";
import { initComputer, initPlayer } from "../controllers/player_controller";

const player = initPlayer();
const computer = initComputer();
createBoard(player, computer);
