from ape import accounts, networks


def alias(project, accounts):
    return project.Alias.deploy(sender=accounts[0])
