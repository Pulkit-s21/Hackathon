// * order list of previous orders
const orders = [
    {
        oid: '#TR12sz11',
        from: 'New York',
        to: 'India',
        orderDate: '8-1-2023',
        deliveryDate: '16-1-2023',
        status: 'Pending'
    },
    {
        oid: '#TR15qz12',
        from: 'Mumbai',
        to: 'Chandigarh',
        orderDate: '10-1-2023',
        deliveryDate: '14-1-2023',
        status: 'Pending'
    },
    {
        oid: '#TR83gh00',
        status: 'Delivered'
    },
    {
        oid: '#TR66db54',
        status: 'Delivered'
    },
];

const orderBox = document.querySelector(".orders")
const alertBox = document.querySelector(".alerts")

const Box1 = document.createElement('div')
const Box2 = document.createElement('div')
const Box3 = document.createElement('div')
const Box4 = document.createElement('div')

Box1.innerHTML = `
    <!-- order Box 1 -->
    <div class="
    flex 
    flex-col 
    gap-2
    bg-gradient-to-b from-gray-100 to-white
    px-4
    py-2
    rounded-lg
    ">
    <div class="flex text-gray-700 font-light justify-between">
        <p>Tracking number</p>
        <p>Status</p>
    </div>

    <div class="flex justify-between">
        <span class="text-2xl" id="result">${orders[0].oid}</span>
        <button class="px-2 py-1 bg-orange-500 text-white">${orders[0].status}</button>
    </div>

    <div class="flex my-2 justify-between">
        <div class="flex items-center gap-2">
        <i class="fa-solid fa-location-dot text-red-500"></i>
        <p class="text-black font-medium text-lg">${orders[0].from}</p>
        </div>
        <p class="text-lg font-Poiret">${orders[0].orderDate}</p>
    </div>

    <div class="flex justify-between">
        <div class="flex items-center gap-2">
        <i class="fa-solid fa-location-dot text-green-500"></i>
        <p class="text-black font-medium text-lg">${orders[0].to}</p>
        </div>
        <p class="text-lg font-Poiret">${orders[0].deliveryDate}</p>
    </div>
    </div>
`

Box2.innerHTML = `
    <!-- order Box 2 -->
    <div class="
    flex 
    flex-col 
    gap-2
    bg-gradient-to-b from-gray-100 to-white
    px-4
    py-2
    rounded-lg
    ">
    <div class="flex text-gray-700 font-light justify-between">
        <p>Tracking number</p>
        <p>Status</p>
    </div>

    <div class="flex justify-between">
        <span class="text-2xl" id="result">${orders[1].oid}</span>
        <button class="px-2 py-1 bg-orange-500 text-white">${orders[1].status}</button>
    </div>

    <div class="flex my-2 justify-between">
        <div class="flex items-center gap-2">
        <i class="fa-solid fa-location-dot text-red-500"></i>
        <p class="text-black font-medium text-lg">${orders[1].from}</p>
        </div>
        <p class="text-lg font-Poiret">${orders[1].orderDate}</p>
    </div>

    <div class="flex justify-between">
        <div class="flex items-center gap-2">
        <i class="fa-solid fa-location-dot text-green-500"></i>
        <p class="text-black font-medium text-lg">${orders[1].to}</p>
        </div>
        <p class="text-lg font-Poiret">${orders[1].deliveryDate}</p>
    </div>
    </div>
`

Box3.innerHTML = `
    <!-- delivered box 1 -->
    <div class="
    flex 
    flex-col 
    gap-2
    bg-gradient-to-b from-gray-100 to-white
    px-4
    py-2
    ">
    <div class="flex text-gray-700 font-light justify-between">
        <p>Tracking number</p>
        <p>Status</p>
    </div>

    <div class="flex justify-between">
        <span class="text-2xl" id="result">${orders[2].oid}</span>
        <button class="px-2 py-1 bg-green-500 text-white">${orders[2].status}</button>
    </div>
    </div>
`

Box4.innerHTML = `
    <!-- delivered box 1 -->
    <div class="
    flex 
    flex-col 
    gap-2
    bg-gradient-to-b from-gray-100 to-white
    px-4
    py-2
    ">
    <div class="flex text-gray-700 font-light justify-between">
        <p>Tracking number</p>
        <p>Status</p>
    </div>

    <div class="flex justify-between">
        <span class="text-2xl" id="result">${orders[3].oid}</span>
        <button class="px-2 py-1 bg-green-500 text-white">${orders[3].status}</button>
    </div>
    </div>
`

orderBox.append(Box1)
orderBox.append(Box2)

alertBox.append(Box3)
alertBox.append(Box4)

// * Making the order status btns work
const all = document.getElementById("all")
const delivered = document.getElementById("deliver")
const inProgress = document.getElementById("progress")

all.addEventListener("click",()=>{
    Box1.classList.remove("hidden")
    Box2.classList.remove("hidden")
    Box3.classList.remove("hidden")
    Box4.classList.remove("hidden")
    all.classList.add("border-b-red-400")
    inProgress.classList.remove("border-b-red-400")
    delivered.classList.remove("border-b-red-400")
})

delivered.addEventListener("click",()=>{
    Box1.classList.add("hidden")
    Box2.classList.add("hidden")
    Box3.classList.remove("hidden")
    Box4.classList.remove("hidden")
    all.classList.remove("border-b-red-400")
    inProgress.classList.remove("border-b-red-400")
    delivered.classList.add("border-b-red-400")
})

inProgress.addEventListener("click",()=>{
    Box3.classList.add("hidden")
    Box4.classList.add("hidden")
    Box1.classList.remove("hidden")
    Box2.classList.remove("hidden")
    all.classList.remove("border-b-red-400")
    delivered.classList.remove("border-b-red-400")
    inProgress.classList.add("border-b-red-400")
})