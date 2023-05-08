import pytest
from brownie import Alias, accounts

@pytest.fixture
def alias():
    return Alias.deploy({'from': accounts[0]})

def test_safe_mint(alias):
    # Test that safeMint function works as expected
    assert alias.balanceOf(accounts[0]) == 0
    alias.safeMint(accounts[0], "https://example.com/token/1")
    assert alias.balanceOf(accounts[0]) == 1
    assert alias.tokenURI(0) == "https://example.com/token/1"

def test_only_owner_can_safe_mint(alias):
    # Test that only the owner can call the safeMint function
    with pytest.raises(Exception):
        alias.safeMint(accounts[1], "https://example.com/token/2", {'from': accounts[1]})
    assert alias.balanceOf(accounts[1]) == 0

def test_burn_token(alias):
    # Test that burning a token works as expected
    alias.safeMint(accounts[0], "https://example.com/token/3")
    assert alias.balanceOf(accounts[0]) == 1
    alias.burn(0)
    assert alias.balanceOf(accounts[0]) == 0

def test_burn_only_owner_can(alias):
    # Test that only the owner can burn tokens
    alias.safeMint(accounts[0], "https://example.com/token/4")
    with pytest.raises(Exception):
        alias.burn(0, {'from': accounts[1]})
    assert alias.balanceOf(accounts[0]) == 1
