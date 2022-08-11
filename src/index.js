console.log('adding change for conflict');
function square(x){
  return x ** 2; 
}
//first, second, third, fourth
//base-feature first, second, third

//git replays my commits on top of new base head..
//you have to do --force push becasue the head to your remote branch 
// is different than your local branch after rebase
// rebase resolve conflicts one commit at a time
// after rebase you can switch back to base branch and simply do fast-forward merge..
// during rebase your current branch is new remote branch for resolving conflicts.. 