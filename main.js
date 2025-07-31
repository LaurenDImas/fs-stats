import {average as mean, median} from "./stats.js";
import {readFileSync} from "node:fs";

const fileBuffer = readFileSync("./score.txt", {encoding: 'utf8'})
const lines = fileBuffer.split('\n');
const nums = lines.map(line => Number.parseInt(line))

const avg = mean(nums);
const med = median(nums);