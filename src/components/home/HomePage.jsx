import React from 'react';
import categories from './all-categoies-arrOfObj/CategoriesHome';
import './categories.scss'
import CategoryItems from './category-items/CategoryItems';


const HomePage = () => {
    return (
        <>
            <div className='categories-container'>
                {categories.map((category) => (
                    <CategoryItems key={category.id} category={category} />
                ))}
            </div>
        </>
    )
}

export default HomePage