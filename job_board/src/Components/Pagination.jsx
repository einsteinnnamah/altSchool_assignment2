// import React from 'react'
// import useState from 'react'
// const Pagination = ({pages = 7}) => {
// const [currentPage, setCurrentPage] = useState(1)
// const [usersPerPage] = useState(7)
//   const indexOfLastUser = currentPage * userPerPage;
//   const indexOfFirstUser = indexOfLastUser - userPerPage;
//   const currentUsers = user.slice(indexOfFirstUser, indexOfFirstUser)
//   const howManyUsers = Math.cell(posts.length/postsPerPage)

//   const numberOfPages = []
//   for (let i=1; i <= pages; i++) {
//     numberOfPages.push(i)
//   }

//   const [currentButton] = useState(1)

//   const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

//   useEffect(() => {
//     let tempNumberOfPages = [...arrOfCurrButtons]
//     if (numberOfPages.length < 6) {
//       tempNumberOfPages = numberOfPages
//     }

//     else if (currentButton >= i && currentButton <= 3) {
//       tempNumberOfPages = [1,2,3,4, numberOfPages.length]
//     }

//     setArrOfCurrButtons(tempNumberOfPages)
//     setCurrentPage(currentButton)
//   }, [currentButton])

//   return (
//     <div>
//       <a href="#">
//         Prev
//       </a>
//     {
//       arrOfCurrButtons.map(((item, index) => {
//         return <a
//         href=''
//         key={index}
//         className={`${currentButton === item ? 'active:bg-blue-800' : ''}`}
//         onClick={() => setCurrentButton(item)}
//         >
//           {item}
//         </a>
//       }))
//     }
//       <a href="">
//         Next
//       </a>
//     </div>
//   )
// }

// export default Pagination