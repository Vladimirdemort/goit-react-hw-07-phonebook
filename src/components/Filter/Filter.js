import React from 'react'

// export default function Filter ({filter}) {
    
//     return (
//         <form>
//             <label>
//                 <input
//                 type="text"
//                 name="filter"
//                 value={''}
//                 onChange={filter}/>
//             </label>
//         </form>
//     )
// }


class Filter extends React.Component {


   filterList = e => {

    this.props.filter(e.target)
   }

    render() { 
        return <div>
                <label> Find contact by name
                    <input
                    type="text"
                    name="filter"
                    value ={this.filterValue}
                    onChange={this.filterList}/>
                </label>
             </div>;
    }
}
 
export default Filter;