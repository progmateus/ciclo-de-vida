import {writeFile, readFile} from "fs/promises";


export const save = async(data) => {
    const {pathname: databaseFile} = new URL("../database.json", import.meta.url)
    const databaseFileSliced = databaseFile.slice(3)
    const currentData = JSON.parse((await readFile(databaseFileSliced)));
    currentData.push(data)

    await writeFile(databaseFileSliced, JSON.stringify(currentData));
}