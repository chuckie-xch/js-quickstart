function dfsPreorder(root: TreeNode, arr: any[]) {
    if (root == null) {
        return;
    }
    arr.push(root.val);
    dfsPreorder(root.left, arr);
    dfsPreorder(root.right, arr);
}

function preorderTraversal(root: TreeNode | null): number[] {
    let arr = [];
    dfsPreorder(root, arr);
    return arr;
};


function preorderTraversal2(root: TreeNode | null): number[] {
    if (root == null) {
        return [];
    }
    let arr = [];
    let st = [];
    st.push(root);
    while (st.length) {
        let node = st.pop();
        arr.push(node.val);
        if (node.right) {
            st.push(node.right);
        }
        if (node.left) {
            st.push(node.left);
        }
    }
    return arr;
};

