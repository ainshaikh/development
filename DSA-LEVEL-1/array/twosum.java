class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap <Integer, Integer> map = new HashMap();
        // Filling Hashmap with nums and index
        for(int i=0; i<nums.length; i++){
            map.put(nums[i],i);
        }
        // searching in the hashmap
        
        for(int i=0; i<nums.length; i++){
            int num = nums[i];
            int rem = target - num;
            if(map.containsKey(rem)){
                int index = map.get(rem);
                // special case
                if(index==i) continue;
                return new int [] {i,index};
            }
        }
        return new int []{};
        
    }
}