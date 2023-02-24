const election = artifacts.require("election");
contract("contact election testing",()=>{

let ele=null;
beforeEach(async()=>{
	ele = await election.deployed();
})

	it("It should return addCandidate function",async()=>{
		await ele.addCandidate("Anand Maurya",456,32);
		const result = await ele.candidateCount();
		console.log("Data_type:",typeof result);
		console.log("Result:",result.toNumber());
		assert(result.toNumber()==3);
	})

	it("It should retun vote function",async()=>{
		const result = await ele.votecount(132);
		console.log("Result:",result.toNumber());
		await ele.vote(132,"aman",19);
		const aps = await ele.votecount(132);
		console.log("Result:",aps.toNumber());
		assert(aps.toNumber()==result.toNumber()+1);
		
	});

	it("It should return votecount function",async()=>{
		const result = await ele.votecount(132);
		console.log("Data_type:",typeof result);
		console.log("Result:",result.toNumber());
		assert(result.toNumber()==1);
	})

	it("It should return validCandi function",async()=>{
		const result = await ele.validCandi(132);
		console.log("Data_type:",typeof result);
		console.log("Result:",result);
		if(result==true)
			console.log("It is valid candidate");
		else
			console.log("It is not valid candidates")
		assert(result==true);
	})

	it("It should return validVote function",async()=>{
		const result = await ele.validVote("0xDedb1A3823AED86ec9D0De7a91a4dB5a372C39d0");
		console.log("Data_type:",typeof result);
		console.log("Result:",result);
		if(result==false)
			console.log("It is valid voters but not give vote");
		else
			console.log("It is valid voters It give vote")
		assert(result==true);
	})
});