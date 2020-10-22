const image = document.getElementById('image');
const  review =document.getElementById('review');
const buttons = document.querySelectorAll('.btn');
const name = document.getElementById('name1')


const reviews = [
    {
name: "Susy",
position: 'Web Developer',
photo: './Photos/blondeLady.jpg' ,
review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores maxime a aliquid quaerat ab, veniam quam sapiente accusantium laborum ea? Totam veniam consequuntur ex error dolores! Quibusdam, voluptates. Repudiandae'
},

{
name: "John",
position: 'Web Designes',
photo: './Photos/bluehat.jpg' ,
review: 'Aspernatur asperiores consectetur repellat ex eum, a id excepturi ea natus, nostrum eaque doloribus cumque alias ad tenetur esse sequi molestias quis nisi dignissimos repellendus, cupiditate eius. Earum, rem deleniti.'
},
{
    name:'Susane',
    position: 'FrontEnd Developer',
    photo:'./Photos/curlyhair.jpg',
    review:'Quos ab facilis dolorem nostrum ipsa consequatur, magni consectetur enim nihil at doloribus quidem quaerat neque temporibus harum expedita a? Quisquam neque eveniet repellat accusamus cumque mollitia adipisci voluptatum illum'

},
{
    name:'Tony',
    position:'Driver',
    photo:'./Photos/hatDude.jpg',
    review:'Nobis autem, unde necessitatibus voluptatum, neque suscipit asperiores magnam esse, labore recusandae tempore laboriosam commodi beatae obcaecati. Animi cupiditate quae eius eaque autem consequuntur quis aperiam, vel, sed amet laudantium.'

},
{
    name:'Haralambi',
    position:'Shaman',
    photo:'./Photos/himesh.jpg',
    review:'Modi tenetur voluptatem numquam veniam dicta ratione ipsa in quis, aspernatur ut blanditiis quo tempora illo optio animi quas officia. Sapiente necessitatibus nostrum laborum animi laboriosam dolorum ipsa at vitae.'

}
// {
//     name:'Red Fire',
//     position:'Dancer',
//     photo:'./Photos/red.jpg',
//     review:"obis autem, unde necessitatibus voluptatum, neque suscipit asperiores magnam esse, labore recusandae tempore laboriosam commodi beatae obcaecati. Animi cupiditate quae eius eaque autem consequuntur quis aperiam, vel, sed amet laudantium."

// }
]
let i =0;

buttons.forEach(button=>{
    button.addEventListener('click', function(){
        if(button.classList.contains('right')){
            i++
            if(i>reviews.length-1){
                i =0
            }
        }
        review.innerHTML = reviews[i].review;
        image.src = reviews[i].photo
        name.innerHTML=reviews[i].name

         if(button.classList.contains('left')){
             i--
            if(i<0){
        i =reviews.length-1
    }

    }
        review.innerHTML = reviews[i].review;
        image.src = reviews[i].photo
        name.innerHTML=reviews[i].name
          if(button.classList.contains('Surprise')){
       i = Math.floor(Math.random()* reviews.length)

   }
         review.innerHTML = reviews[i].review;
        image.src = reviews[i].photo
        name.innerHTML=reviews[i].name
    }
 
    )
})