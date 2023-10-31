import * as React from "react";

export default function NewFieldModal({addField,visibleModalNewField,setVisibleModalNewField,fields,setFields,isEdit,data,setDataEdit,pageTranslate}){

    return(
    <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`fixed top-0 left-0 right-0 z-50 ${visibleModalNewField?" bg-gray-100 bg-opacity-70":"hidden"} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full h-[100vh] flex justify-center items-center`}>
        <div className="w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal" onClick={()=>{setVisibleModalNewField(false);setDataEdit({label:""})}}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{!isEdit?pageTranslate?.new_field:pageTranslate?.edit_field}</h3>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{pageTranslate?.field_name}</label>
                            <input type="text" name="label" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={pageTranslate.enter_a_field_name} required onChange={(e)=>{
                                setDataEdit({...data,id:Math.random()+"",[e.target.name]:e.target.value,key:e.target.value,placeholder:e.target.value});
                            }}
                            value={data.label}
                            />
                        </div>
                        <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{pageTranslate?.field_type}</label>
                          <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input onClick={(e)=>setDataEdit({...data,type:e.target.value})} id="list-radio-license" type="radio" value="text" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Text</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input onClick={(e)=>setDataEdit({...data,type:e.target.value})} id="list-radio-license" type="radio" value="number" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input onClick={(e)=>setDataEdit({...data,type:e.target.value})} id="list-radio-id" type="radio" value="date" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">DateTime</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input onClick={(e)=>setDataEdit({...data,type:e.target.value})} id="list-radio-millitary" type="radio" value="file" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">File</label>
                                </div>
                            </li>
                          </ul>
                        </div>
                        
                        <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e)=>{
                            e.preventDefault()
                            if(!isEdit){
                                if(data.label!=""){

                                    const tempFields = { ...fields };
                                    const oldFields = tempFields[addField];
                                    const newFields = [...oldFields,data]
                                    tempFields[addField] = newFields;
                                    setFields({ ...tempFields });
                                    setVisibleModalNewField(false)
                                    setDataEdit({label:""})
                                    setNewField({label:""})
                                }else{
                                    alert("Error")
                                }
                            }else{
                                if(data.label!=""){
                                    const tempFields = { ...fields };
                                    const oldFields = tempFields["fieldSelectedList"];
                                    oldFields[data.index]=data
                                    setFields({...fields,fieldSelectedList:oldFields})
                                    setVisibleModalNewField(false)
                                    setDataEdit({label:""})
                                    setNewField({label:""})
                                }else{
                                    alert("Error")
                                }
                            }
                        }}
                        >{isEdit?"EDIT":"ADD"}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>     
    )
}