let menuHamburger = document.querySelector('#menu-icon');

menuHamburger.addEventListener('click', () => {
    if(menuHamburger.classList.contains('bx-menu')) {
        menuHamburger.classList.replace('bx-menu', 'bx-x');
    } else {
        menuHamburger.classList.replace('bx-x', 'bx-menu');

    }

    document.querySelector('.navbar').classList.toggle('active')
})

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id')
        
        if(top >= offset && top <offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a[href*="+ id +"]").classList.add('active');
            })
        }
    });
    
    

    // stiky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)
}


const pathImg = 'img/'
let dataImage = [
    {
        img: 'img1.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '800',
        width2: '700',
        width3: '450',
    },
    {
        img: 'img2.jpg', 
        caption:`<p>Caption Image 2</p>`,
        width: '720',
        width2: '690',
        width3: '450',
    },
    {
        img: 'img3.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '950',
        width2: '700',
        width3: '450',
    },
    {
        img: 'img4.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '250',
        width2: '230',
        width3: '210',
    },
    {
        img: 'img5.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '750',
        width2: '700',
        width3: '450',
    },
    {
        img: 'img6.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '750',
        width2: '700',
        width3: '450',
    },
    {
        img: 'img7.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '750',
        width2: '700',
        width3: '450',
    },
    {
        img: 'img8.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '570',
        width2: '540',
        width3: '450',
    },
    {
        img: 'img9.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '650',
        width2: '600',
        width3: '450',
    },
    {
        img: 'img10.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '780',
        width2: '700',
        width3: '450',
    },
    {
        img: 'img11.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '850',
        width2: '700',
        width3: '450',
    },
    {
        img: 'img12.jpg', 
        caption:`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi molestias laudantium neque repellendus aut?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit? lorem1000</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in commodi vel repellat iure ea quisquam modi quasi nobis impedit?</p>`,
        width: '330',
        width2: '300',
        width3: '270',
    },
]


const galleryContent = document.querySelector('.gallery-content');
const showImageDiv = document.querySelector('.show-image');
const showImage = document.querySelector('.show-image .image');

// Ketika Depencet Tombol Silang
document.querySelector('.exitShow').addEventListener('click', () => {
    showImageDiv.classList.remove('active')
})

dataImage.forEach(img => {
    galleryContent.innerHTML += `<a data-path="${pathImg + img.img}" href="${pathImg + img.img}"><img src="${pathImg + img.img}" alt="${pathImg + img.img}"></a>`
    showImage.innerHTML += `<img src="${pathImg + img.img}" alt="${pathImg + img.img}">`
});

let imageSlidePosisi = 0;
document.addEventListener('DOMContentLoaded', () => {
    const allImageShow = document.querySelectorAll('.show-image .image img');
    const captionImage = document.querySelector('.show-image .content .caption textcaption')
    const galleryImages = document.querySelectorAll('.gallery-content a');
    
    galleryImages.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            
            showImageDiv.classList.add('active');
            dataImage.forEach((data, index) => {
                if(element.dataset.path == (pathImg + data.img)) {
                    imageSlidePosisi = index;
                    gantiImage();
                }
            })
        })
    
    })

    allImageShow.forEach((img, index) => {
        img.style.left = `${index * 100}%`;
    })

    const gantiImage = () => {
        allImageShow.forEach((img, index) => {
            if(imageSlidePosisi >= dataImage.length) {
                imageSlidePosisi = 0;
            } else if(imageSlidePosisi < 0) {
                imageSlidePosisi = dataImage.length - 1;
            }

            if(index == imageSlidePosisi) {
                captionImage.style.opacity = 0;
                setTimeout(() => {
                    showImage.style.setProperty('--width', dataImage[index].width + 'px');
                    showImage.style.setProperty('--width2', dataImage[index].width2 + 'px');
                    showImage.style.setProperty('--width3', dataImage[index].width3 + 'px');
                }, 150)
                setTimeout(() => {
                    captionImage.innerHTML = dataImage[index].caption;
                    captionImage.style.opacity = 1
                }, 400)
            }
            

            img.style.transform = `translateX(-${imageSlidePosisi * 100}%)`
        });
    }

    gantiImage();

    document.querySelector('.sebelumnya').addEventListener('click', () => {
        imageSlidePosisi--;
        gantiImage();
    })
    document.querySelector('.setelahnya').addEventListener('click', () => {
        imageSlidePosisi++;
        gantiImage();
    })

})



