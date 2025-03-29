// Filter out current user and followed accounts from the accounts list
const filteredAccounts = accounts.filter((account) => {
  return account.id !== currentUser.id && !followedAccounts.includes(account.id)
})

// Use filteredAccounts instead of the original accounts array
return (
  <div>
    {filteredAccounts.map((account) => (
      // ... existing account rendering code ...
    ))}
  </div>
) 