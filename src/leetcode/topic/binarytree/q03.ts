function dfsPostorderTraversal(root: TreeNode, res: any[]) {
    if (root) {
        dfsPostorderTraversal(root.left, res);
        dfsPostorderTraversal(root.right, res);
        res.push(root.val);
    }
}

function postorderTraversal(root: TreeNode | null): number[] {
    const res = [];
    dfsPostorderTraversal(root, res);
    return res;
};