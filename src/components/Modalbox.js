import React from 'react'

const Modalbox = ({onchange,handleedit,id}) => {
  return (
    <>
         <div className="modal-box  ">
                    <form method="dialog">
                      <div className="  items-center flex flex-col   ">
                      <h3 className="font-bold text-lg">Edit here</h3>
                        {/* making items center */}
                        <form className="mb-2.5  w-4/6 container  flex flex-col items-center justify-center " action="">
                          <label className="form-control   w-full"> <span className="label-text flex flex-col ">  <h1 className="  text-lg m-2 ">Title</h1></span></label>
                          <input name='title' onChange={onchange}  type="text" placeholder="Type here" className="input  input-bordered input-success w-full" />

                          <label className="form-control   w-full"> <span className="label-text flex flex-col ">  <h1 className="  text-lg m-2 ">Description</h1></span></label>
                          <input name='description' onChange={onchange}  type="text" placeholder="Type here" className="input  input-bordered input-success w-full" />

                          <label className="form-control   w-full"> <span className="label-text flex flex-col ">  <h1 className="  text-lg m-2 ">Tag</h1></span></label>
                          <input name='tag'  onChange={onchange}  type="text" placeholder="Type here" className="input mb-5  input-bordered input-success w-full" />
                      <button name='edit' value={id} type="button" onClick={handleedit} className="btn">Submit</button>
                        </form>

                      </div>
                    </form>
                </div>
    </>
  )
}

export default Modalbox
