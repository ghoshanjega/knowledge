https://learn.microsoft.com/en-us/azure/active-directory/authentication/

### Azure Ad (AAD)

principle of least privilege

- users
- groups
- service principal for enterprise application or azure resources
- service principal for application (managed identifity)
- devices (registered in azure ad/joined to azure ad/joined to on-prem ad/registered in on-prem ad)

AD is the source of truth. Azure AD is a copy of AD. Azure AD connect syncs AD to Azure AD. Azure AD can only sync to one AD (except for staging environments). There is also azure ad connect cloud sync. AD can sync to multiple azure ad tenants. But only one azure ad tenant can sync to one AD. And only on azure ad can do write. 

Ways to sync AD passwords to Azure AD:
- password hash sync (send hash of hash to azure ad) (cloud)
- pass-through authentication (check with domain controller whether the password is correct) (hybrid)
- federation(single sign on) (hybrid)

Federation has the highest security. Pass-through authentication is the most secure hybrid option. Password hash sync is the least secure option. However, password hash sync is the most common option as backup.

AuthZ is done by Azure AD. AuthN is done by AD.


Acquisition of new company and using multi-factor authentication
Since it is not possible to change the usage model of an existing provider as it is right now, you have to create a new one and reactivate your existing server with activation credentials from the new provider.

Azure AD feautures:
- conditional access(only allow access from certain locations, devices, etc)
- multi-factor authentication(2FA)
- self-service password reset
- identity protection
- privileged identity management(Just in time access, Just enough access)
- access reviews(who has access to what)
- single sign on


Azure AD concepts:
- tenant(single dedicated and trusted instance of Azure AD)
- identity(object that can be authenticated)
- account(an identity with data in it)
- Azure ad account
- Azure subscription(account that can be billed)

Traditional Windows server based AD:
- Active directory domain services(AD DS) 
- Active directory federation services(AD FS)
- Active directory certificate services(AD CS)
- Active directory lightweight directory services(AD LDS)
- Active directory rights management services(AD RMS)

User account types:
- cloud only
- directory synced (from on-prem AD)
- guest user

Group account types:
- Security groups (restrict access to resources) (Only implemented by Azure AD admin)
- Office 365 groups (collaboration) (also for guest users)
User accounts are added to groups as assigned, dynamic user or dynamic device.

How to setup administrative units:
- Create a new administrative unit
- Add users to the administrative unit
- Create a custom role
- Assign the custom role to the administrative unit

- Azure AD Global Administrator has permissions to manage all aspects of Azure AD
- Azure AD Privileged Role Administrator can manage Azure AD roles
- Azure AD User Administrator can manage users and groups
- Azure AD Conditional Access Administrator can manage conditional access policies
- Azure AD Authentication Administrator can manage authentication methods
- Azure AD Security Administrator can manage security settings
- Azure AD Exchange Administrator can manage Exchange Online settings
- Azure AD SharePoint Administrator can manage SharePoint Online settings

Azure AD built-in roles (https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles)

Management groups are used to apply policies to multiple subscriptions. 

- Create policy
- Initiative definition (collection of policies) / policy initiative
- Assign initiative definition to policy 
- Assign policy to scope (management group, subscription, resource group, resource)


Azure RBAC
- Security principal (user, group, service principal, managed identity)
- Role definition (built-in, custom)

It has Actions, NotActions, DataActions, NotDataActions, AssignableScopes





