# Tables

A simple table component to use in React with a custom CSS file.

You can use it as is in your code :

```react
import SimpleTable from "./path/to/component/Table";

export default () => {
    return <Table/>
}
```

Or add your own data:

```react
import SimpleTable from "./path/to/component/Table";

export default () => {
	const columns = ["fruit", "colour"]
	const data = [{fruit: "Apple", colour: "Green"}, {fruit: "Cherry", colour: "red"}]
    return <Table data={data} columns={columns}/>
}
```

