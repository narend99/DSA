//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str = readLine();
        let obj = new Solution();
        let res = obj.removeDups(str);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} str
 * @returns {string}
 */

class Solution {
    removeDups(s) {
        
        var n = s.length , mpp = new Map() , ans = "";
        
        for(let i=0;i<n;i++)
        {
            if(!mpp.has(s[i])) mpp.set(s[i],1);
            else mpp.set(s[i],mpp.get(s[i]) + 1);
        }

        for(let i=0;i<n;i++)
        {
            if(mpp.get(s[i]))
            {
                ans += s[i];
                mpp.delete(s[i]);
            }
        }
        
        return ans;
    }
}
