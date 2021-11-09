/**
Implement a function called inventoryList which maintains
a collection of all item names existing in an inventory
where each item has a unique name. It will return a new
object with 3 methods:

add(name) - A string will be passed and this is added to
the collection. It is assumed that all names in the
collection and passed to the collection will be unique.

remove(name) - A string will be passed and this item
is removed from the collection if it exists. If it
does not exist, nothing happens.

getList() - Returns an array of names of items that
are currently in the collection. The names are returned
in the order they were added.

Assume the following:
- The size of the collection will never exceed 10.
- All parameters passed to add and remove functions will never be empty.
*/

interface Inventory {
	add: (name: string) => void
	remove: (name: string) => void
	getList: () => void
}

const inventoryList = (): Inventory => {
	// store all the items
	const inventory: Array<string | undefined> = []

	// Add item to array
	const add = (name: string): void => {
		inventory.push(name)
		console.log(`${name} was added.`)
	}

	// Remove item from array
	const remove = (name: string): void => {
		if (inventory.includes(name)) {
			const indexOfItemToRemove = inventory.indexOf(name)
			inventory.splice(indexOfItemToRemove, 1)
			console.log(`${name} was removed.`)
		} else {
			console.log(`${name} does not exist. ${name} was not removed.`)
		}
	}

	// Output the array
	const getList = (): void => {
		console.log('---- Inventory List ----')
		inventory.forEach((item: string, index: number) => {
			console.log(`${index + 1}: ${item}`)
		})
		console.log('----- End of List ------')
	}
	
	return { add, remove, getList }
}

const commands = inventoryList()
commands.add('apple')
commands.add('pineapple')
commands.add('banana')
commands.add('pear')
commands.add('grapes')
commands.add('orange')
commands.add('egg')
commands.add('strawberry')
commands.getList()
commands.remove('eggs')
commands.remove('egg')
commands.getList()



