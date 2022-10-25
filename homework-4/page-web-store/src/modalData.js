const modalWindowDeclarations = [
    {
      id: 'modalID1',
      header: "Do you want to delete this file?",
      text: `Once you delete this file, it will not be possibble to undo this action. Are you sure you want to delete it?`,
      closeButton: true,
      actions: (
          <>
          <button className="modal_body_btn">Ok</button>
          <button className="modal_body_btn">Cancel</button>
          </>
      )
    },

    {
      id: 'modalID2',
      header: "Do you want to add new project?",
      text: 'Would you like to save your current project? If you discard, the changes will be lost',
      closeButton: true,
      actions: (
        <>
       <button className="modal_body_btn">Yes</button>
    <button className="modal_body_btn">No</button>
        </>
    )
    }, 

    {
      id: 'modalID3',
      header: "Do you want to add the product to the cart?",
      text: 'This product will be added. You can make changes in the cart',
      closeButton: true,
      actions: (
        <>
       <button className="modal_body_btn">Yes</button>
    <button className="modal_body_btn">No</button>
        </>
    )
    }
  ]
  
  export default modalWindowDeclarations;