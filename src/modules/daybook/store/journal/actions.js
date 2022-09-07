//pueden ser tareas asincronas que pueden llamar a una mutacion

import journal from "@/api/journalApi"

export const loadEntries = async({commit}) =>{
    const {data} = await journal.get('/entries.json')

    if (!data){
        commit('setEntries', [])
        return
    }

    const entries = []
    for (let id of Object.keys(data)){
        entries.push({ 
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
}
export const updateEntry = async({commit}, entry) =>{
    const { id, ...dataToSave } = entry
    await journal.put(`/entries/${id}.json`, dataToSave)
    commit('updateEntry', entry)
    
}
export const createEntry = async({commit}, entry) =>{
    const { date, picture, text } = entry
    const dataToSave  = {date, picture, text}
    const {data} = await journal.post(`/entries.json`, entry)

    dataToSave.id = data.name
    commit('addEntry', dataToSave)
    return data.name
}

export const deleteEntry = async({commit},id) => {
    await journal.delete(`/entries/${id}.json`)
    commit('borrar', id)
    return id
}