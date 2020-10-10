#include <iostream> 
#include <vector> 

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
    
    
vector<int> preorderTraversal(TreeNode* root) {
    vector<int> ans;
    vector<TreeNode*> s;
    while (root){
        ans.push_back(root->val);
        if (root->right) s.push_back(root->right);
        if (root->left) root = root->left;
        else if (!s.empty()){
            root = s.back();
            s.pop_back();
        } else break;
    }
        
    return ans;
}