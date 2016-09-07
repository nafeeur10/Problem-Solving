#include <iostream>
#include <bits/stdc++.h>

using namespace std;

struct node
{
    int value;
    struct node *left, *right;
};

struct node* NewNode(int key)
{
     struct node *temp = (struct node *)malloc(sizeof(struct node));
     temp->value = key;
     temp->left = NULL;
     temp->right = NULL;

     return temp;
}

struct node* Insert(struct node* root, int key)
{
    if(root==NULL)
    {
        return NewNode(key);
    }

    if(key<root->value)
    {
        root->left = Insert(root->left, key);
    }

    else if(key>root->value)
    {
        root->right = Insert(root->right, key);
    }

    return root;
}

void Inorder(struct node* root)
{
    if(root==NULL)
        return;

    Inorder(root->left);
    printf("%d\n", root->value);
    Inorder(root->right);
}

int main()
{
    struct node *root;
    root=NULL;

    root=Insert(root, 50);

    Insert(root, 30);
    Insert(root, 20);
    Insert(root, 40);
    Insert(root, 70);
    Insert(root, 60);
    Insert(root, 80);

    Inorder(root);


    return 0;
}
