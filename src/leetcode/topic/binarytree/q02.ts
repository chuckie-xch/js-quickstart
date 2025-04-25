function dfsInorderTraversal(root: TreeNode, res: any[]) {
    if (root) {
        dfsInorderTraversal(root.left, res);
        res.push(root.val);
        dfsInorderTraversal(root.right, res);
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    const res = [];
    dfsInorderTraversal(root, res);
    return res;
};


function inorderTraversal2(root: TreeNode | null): number[] {
    const res = [];
    const st = [];
    while (root != null || st.length > 0) {
        if (root != null) {
            st.push(root);
            root = root.left;
        } else {
            let node = st.pop();
            res.push(node.val);
            root = node.right;
        }
    }
    return res;
};