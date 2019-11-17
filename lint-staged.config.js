module.exports = {
  '*.@(js|jsx|ts|tsx)': ['prettier --write', 'yarn lint --fix', 'git add'],
  '*.@(json|md)': ['prettier --write', 'git add']
};
