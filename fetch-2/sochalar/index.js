let flag = true;
let count = true;
let parent = document.getElementById('parent');
let child = document.getElementById('child');
let category = document.getElementById('categories');
let shortList = document.getElementById('shortList');
let myInp = document.getElementById('inp');
let categoryItem;
let array = [];

let home = async () => {
    let res = await fetch('https://fakestoreapi.com/products/');
    let data = await res.json();
    array= data;
    getData()
}
let categories = async () => {
    category.style.display='block'
    let res = await fetch('https://fakestoreapi.com/products/categories/');
    let data = await res.json();
    if (flag) {
        data.forEach(element => {
            let ele = document.createElement('p');
            ele.textContent = element;
            category.append(ele);
            flag = false;
        });
        categoryItem = document.querySelectorAll('#categories > p');
        categoryItem.forEach(element => {
            element.addEventListener('click', () => {
                newcatogory(element.innerHTML);
        
            })
        })
    }
    else {
        category.innerHTML = ''
        flag = true;
        category.style.display='none'
    }
}

let newcatogory = async (category) => {
    category.innerHTML = '';
    flag = true;
    parent.innerHTML = '';
    let res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    let data = await res.json();
    array = data;
    getData()
}

let shortBy = () => {
    if (count) {
        shortList.style.display = 'block';
        count = false;
    }
}

let itemDescription = async (id)=>{
    child.style.display='block'
    child.innerHTML='';
    parent.style.display = 'none';
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await res.json()
    console.log(data)
        let imgDiv = document.createElement('div');
        let dataDiv = document.createElement('div');
        let img = document.createElement('img');
        img.src = data.image;
        imgDiv.append(img);
        let title = document.createElement('h1');
        title.textContent = data.title;
        let price = document.createElement('h2');
        price.textContent = `Price : ${data.price}`;
        let description = document.createElement('p');
        description.textContent = `Description : ${data.description}`;
        let category = document.createElement('p');
        category.textContent = `Categoty : ${data.category}`;
        let rating = document.createElement('p');
        rating.textContent = `Ratings : ${data.rating.rate}`;
        dataDiv.append(title,price,rating,description,category);
        dataDiv.style.backgroundColor = 'white'
        child.append(imgDiv,dataDiv);
}

let lowHigh = ()=>{
    parent.innerHTML = '';
    shortList.style.display = 'none';
    count = true;
    array.sort((a,b)=>{
        return a.price-b.price;
    });
    getData();
}

let highLow = ()=>{
    parent.innerHTML = '';
    shortList.style.display = 'none';
    count = true;
    array.sort((a,b)=>{
        return b.price-a.price;
    });
    getData();
}

 


let searchbar= async(  )=>{
    array=[];
    let res = await fetch('https://fakestoreapi.com/products/');
    let data = await res.json();
    if(myInp.value=='') alert('Please Write Something In SearchBar');
    else {
        data.forEach(element=>{
            if(element.title.toLowerCase().includes(myInp.value.toLowerCase())) array.push(element);
        })
        getData()
    }
}



function getData(){
    child.style.display = 'none'
    parent.style.display='grid'
    category.style.display='none'
    parent.innerHTML=''
    array.forEach(element => {
        let elementCard = document.createElement('div');
        elementCard.id = `${element.id}`
        let img = document.createElement('img');
        img.src = element.image;
        
        let title = document.createElement('p');
        title.textContent = element.title;
        
        let price = document.createElement('p');
        price.textContent = `Price: ₹${element.price * 65    }`;
        
        elementCard.append(img, title, price);
        parent.append(elementCard)
    })
    
    let elementCard = document.querySelectorAll('#parent>div');
    elementCard.forEach(element=>{
        element.addEventListener('click', ()=>{
            itemDescription(element.id);
        })
    })
}

home()