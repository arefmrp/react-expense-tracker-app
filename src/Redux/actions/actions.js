const ADDITEMS = 'Add';
const REMOVEITEMS = 'Remove';




const AddItems = (val)=>({type:ADDITEMS,val:val});
const RemoveItems = (id)=>({type:REMOVEITEMS,id});






export {
    ADDITEMS,AddItems,
    REMOVEITEMS,RemoveItems
}