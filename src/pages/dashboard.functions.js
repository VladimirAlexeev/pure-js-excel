import {storage} from "@/core/utils";

function toHTML(key) {
    const model = storage(key)
    const id = key.split(':')[1]
    return `
        <li class="db__record">
            <a href="#excel/${id}">${model.title}</a>
            <strong>
                ${new Date(model.openedDate).toLocaleDateString()}
                ${new Date(model.openedDate).toLocaleTimeString()}
            </strong>
        </li>

    `
}

// excel:13321
function getAllKeys() {
    const keys = [];
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes('excel')) {
            continue;
        }
        keys.push(key);
    }

    return keys;
}

export function getAllRecords() {
    const keys = getAllKeys();
    if (keys.length > 0) {
        return `
            <div class="db__list-header">
              <span>Name</span>
              <span>Create date:</span>
            </div>
    
            <div class="db__list">
              ${keys.map(toHTML).join('')}
            </div>
        `
    }

    return `<p>No records found</p>`
}