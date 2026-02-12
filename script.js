const cars = [
    {
        id: 1,
        name: "Tesla Model S",
        category: "Sedan",
        price: "$89,990",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "BMW X5",
        category: "SUV",
        price: "$65,000",
        image: "https://images.unsplash.com/photo-1615908397724-6dc711db34a7?q=80&w=1332&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Mercedes AMG GT",
        category: "Luxury",
        price: "$115,000",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Audi A4",
        category: "Sedan",
        price: "$45,000",
        image: "https://images.unsplash.com/photo-1655225446996-6498fd7b9e0c?w=600&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Range Rover Sport",
        category: "SUV",
        price: "$90,000",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Porsche 911",
        category: "Luxury",
        price: "$130,000",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1170&auto=format&fit=crop&w=600&q=80"
    }
];

const carContainer = document.getElementById('carContainer');

function displayCars(carList) {
    carContainer.innerHTML = "";

    if (carList.length === 0) {
        carContainer.innerHTML = "<h3 class='text-center text-muted'>No cars found!</h3>";
        return;
    }

    carList.forEach(car => {
        const carHTML = `
                    <div class="col-md-4 col-sm-6">
                        <div class="card car-card h-100">
                            <img src="${car.image}" class="card-img-top car-img-top" alt="${car.name}">
                            <div class="card-body">
                                <span class="badge bg-secondary mb-2">${car.category}</span>
                                <h5 class="card-title">${car.name}</h5>
                                <p class="price-tag">${car.price}</p>
                                <button class="btn btn-outline-danger w-100">View Details</button>
                            </div>
                        </div>
                    </div>
                `;
        carContainer.innerHTML += carHTML;
    });
}

function filterCars() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(searchInput)
    );
    displayCars(filteredCars);
}

function filterCategory(category) {
    if (category === 'all') {
        displayCars(cars);
    } else {
        const filteredCars = cars.filter(car => car.category === category);
        displayCars(filteredCars);
    }
}

function handleContact(event) {
    event.preventDefault();
    alert("Thank you! Our showroom representative will contact you shortly.");
    event.target.reset();
}

displayCars(cars);