import { useState } from 'react'
import { AddCategory, GifGrid } from './components'
import { v4 as uuidv4 } from 'uuid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid
          key={uuidv4()}
          category={category}
        />
      ))}
    </>
  )
}
