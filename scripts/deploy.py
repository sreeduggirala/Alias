from ape import accounts, networks


def main(project, accounts):
    return project.Alias.deploy(sender=accounts[0])
