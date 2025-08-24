import fs from 'fs/promises'
import fsn from 'fs'
import path, { join } from 'path'

const basepath = 'D:/web-timepass/practice'
let files = await fs.readdir(basepath)
for (const item of files) {
    console.log("running for", item)
    let exe = item.split(".")[item.split.length - 1]
    console.log(exe);
    if (exe != 'js' && exe != 'json' && item.split('.').length > 1) {
        if (fsn.existsSync(path.join(basepath, exe))) {
            fs.rename(path.join(basepath,item),path.join(basepath,exe,item,))
        } else {
            fs.mkdir(exe)
            fs.rename(path.join(basepath,item),path.join(basepath,exe,item,))

        }
    }

}