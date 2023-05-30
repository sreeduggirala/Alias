from ape import accounts

@pytest.fixture
def alias(project, accounts):
  return project.Alias.deploy(sender=accounts[0])