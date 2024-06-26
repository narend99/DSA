//{ Driver Code Starts
import java.util.*;

class ExtraElement {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] a = new int[n];
            int[] b = new int[n - 1];
            for (int i = 0; i < n; i++) a[i] = sc.nextInt();
            for (int i = 0; i < n - 1; i++) b[i] = sc.nextInt();
            Solution g = new Solution();
            System.out.println(g.findExtra(n, a, b));
        }
    }
}
// } Driver Code Ends


/*Complete the function below*/
class Solution {
    public int findExtra(int N, int arr1[], int arr2[]) {
       
       int i = 0 , j = 0 , n = arr1.length , m = arr2.length;
       
       while(i<n && j<m)
       {
           if(arr1[i] == arr2[j])
           {
               i++;
               j++;
           }
           else return i;
       }
       
       return i;
    }
}