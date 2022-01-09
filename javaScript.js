//console.log("I am javaScript");
const container = document.querySelector('.container');

function stateData()
{
	let url = "https://data.covid19india.org/state_district_wise.json";
	
	fetch(url).then((response)=>{
		return response.json();
	}).then((data)=>{
		let index = 0;
		for(const k in data)
		{
			//console.log(k);
			index++;
			accessData(k, index);
			
		}
	})
}
stateData();

function accessData(d, check){
	let url = "https://data.covid19india.org/state_district_wise.json";
	
	fetch(url).then((response)=>{
		return response.json();
	}).then((data)=>{
		//console.log(data);
		 let a=data[d].districtData;
		//console.log(a);
		document.querySelector('.stateName').innerHTML=d;
		let totalDisData = document.getElementById('totalDisData');
		let districtTable = document.getElementById('districtTable');
		let stateTable = document.getElementById('stateTable');
		
		if(totalDisData.rows.length>1)
		{
			totalDisData.deleteRow(1);
		}
		if(districtTable.rows.length >1)
			{
				while(districtTable.rows.length!=1)
				{
					districtTable.deleteRow(1);
				}
			}
		let i=1;
		let act=0, conf=0, migr=0, deceas=0;
        for( const x in a){
			let row = districtTable.insertRow(i);
			let cell1 = row.insertCell(0);
			cell1.innerHTML = x;

			let cell2 = row.insertCell(1);
			cell2.innerHTML = a[x]["active"];
			if(a[x]["active"]>=0)
			{
				act+=a[x]["active"];
			}

			let cell3 = row.insertCell(2);
			cell3.innerHTML = a[x]["confirmed"];
			if(a[x]["active"]>=0)
			{
				conf+=a[x]["confirmed"];
			}

			let cell4 = row.insertCell(3);
			cell4.innerHTML = a[x]["migratedother"];
			if(a[x]["active"]>=0)
			{
				migr+=a[x]["migratedother"];
			}

			let cell5 = row.insertCell(4);
			cell5.innerHTML = a[x]["deceased"];
			if(a[x]["active"]>=0)
			{
				deceas+=a[x]["deceased"];
			}
				//console.log(a[x]["active"]);
				//console.log(x);
			i++;
		}
		let row = totalDisData.insertRow(1);
		let cell1 = row.insertCell(0);
			cell1.innerHTML = act;
			let cell2 = row.insertCell(1);
			cell2.innerHTML = conf;

			let cell3 = row.insertCell(2);
			cell3.innerHTML = migr;

			let cell4 = row.insertCell(3);
			cell4.innerHTML = deceas;	

				if(check>0)
			{
			 
				//.log(check);
              let stateRow = stateTable.insertRow(1);
			  let stateCell1 = stateRow.insertCell(0);
			  stateCell1.innerHTML = d;

			  let stateCell2 = stateRow.insertCell(1);
			  stateCell2.innerHTML = act;

			  let stateCell3 = stateRow.insertCell(2);
			  stateCell3.innerHTML = conf;

			  let stateCell4 = stateRow.insertCell(3);
			  stateCell4.innerHTML = migr;

			  let stateCell5 = stateRow.insertCell(4);
			  stateCell5.innerHTML = deceas;
			}
			
	})
}


function getData(d){
	let districtContainer = document.querySelector('.districtContainer');
		districtContainer.classList.remove('hidden');
	accessData(d, 0);
}
function closeTable(){
	let districtContainer = document.querySelector('.districtContainer');
		districtContainer.classList.add('hidden');
}
function showState(){
	let container = document.querySelector('.container');
	container.classList.remove('hidden');

	let stateTableDiv = document.querySelector('.stateTableDiv');
	stateTableDiv.classList.add('hidden');
}
function showStateData(){
	let stateTableDiv = document.querySelector('.stateTableDiv');
	stateTableDiv.classList.remove('hidden');

	let container = document.querySelector('.container');
	container.classList.add('hidden');
}
function closeDataTable(){
	let stateTableDiv = document.querySelector('.stateTableDiv');
	stateTableDiv.classList.add('hidden');

	let container = document.querySelector('.container');
	container.classList.add('hidden');
}