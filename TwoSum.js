/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// Task given array nums as x / input , and target as y
// akan mengemballikan dua number yang ditambahkan dan akan di komparasi dengan target
let numsArray1 = [2,7,11,15];
let targetValue1 = 9;

let numsArray2 = [2,3,4];
let targetValue2 = 6;

let numsArray3 = [3,3];
let targetValue3 = 6;

function twoSum (nums, target){

    // Objek untuk menyimpan angka dan indeksnya yang telah diperiksa
    let number = {};

    // Looping melalui setiap elemen dalam array 'nums'
    for (let i = 0; i < nums.length; i++){

        // Hitung nilai 'complement' sebagai selisih antara 'target' dan angka saat ini
        const complement = target - nums[i];

        // Periksa apakah 'complement' sudah ada dalam objek 'number'
        if (complement in number){
            // Jika ya, kembalikan indeks dari 'complement' dan indeks saat ini
            return [number[complement] , i];
        }

        // Simpan angka saat ini dengan indeksnya dalam objek 'number'
        number[nums[i]] = i;

    }

}

// Menguji fungsi dengan berbagai input
const result1 = twoSum(numsArray1, targetValue1);
console.log(result1); // Output yang diharapkan: [0, 1]

const result2 = twoSum(numsArray2, targetValue2);
console.log(result2); // Output yang diharapkan: [1, 2]

const result3 = twoSum(numsArray3, targetValue3);
console.log(result3); // Output yang diharapkan: [0, 1]