// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 < 0.9.0;
struct candidate
{
	string name;
	uint ID;
	uint age;
	uint voteCount;
}
struct person
{
	string name;
	uint age;
	bool flag;
}
contract election
{
	uint cc;
	mapping (uint => candidate) public candi;
	mapping (address => person) public voters;
	event votedEvent (
        uint indexed _candidateId
    );
	constructor () 
	{
        addCandidate("BJP", 132, 35);
        addCandidate("AAP", 231, 43);
    }
    function addCandidate (string memory _name, uint _candidateId, uint age) public 
    {
    	require(age>17);
    	cc++;
        candi[_candidateId] = candidate(_name, _candidateId, age, 0);
    }

    function vote (uint _candidateId, string memory _name, uint age) public 
    {
        require(!voters[msg.sender].flag);
        require(_candidateId > 0 && age>=18);
        voters[msg.sender] = person(_name, age, true);
        candi[_candidateId].voteCount ++;
        emit votedEvent(_candidateId);
    }
    function candidateCount() public view returns(uint)
    {
    	return cc;
    }
    function votecount(uint _candidateId) public view returns(uint)
    {
    	return candi[_candidateId].voteCount;
    }
    function validCandi(uint _candidateId) public view returns(bool)
    {
    	if(candi[_candidateId].age>17)
    	return true;
    	return false;
    }
    function validVote(address adrs) public view returns(bool)
    {
    	return voters[adrs].flag;
    }
}