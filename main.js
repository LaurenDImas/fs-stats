import {average as mean, median} from "fc-stats-test";
import {readFileSync} from "node:fs";

const fileBuffer = readFileSync("./score.txt", {encoding: 'utf8'})
const lines = fileBuffer.split('\n');
const nums = lines.map(line => Number.parseInt(line))

const avg = mean(nums);
const med = median(nums);

console.log({avg, med})