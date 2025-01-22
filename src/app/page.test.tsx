import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import Home from './page';

beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('Home Page', () => {
  it('renders no recipes found', async () => {
    // Mock the fetch response
    fetchMock.mockResponse(JSON.stringify({ recipes: [] }));
    render(<Home />);
    const noRecipesFound = await screen.findByText('No Recipes Found');
    expect(noRecipesFound).toBeInTheDocument();
  });
  it('renders two recipes', async () => {
    // Mock the fetch response
    const mockRecipes = {
      recipes: [
        {
          id: 1,
          name: 'Test Recipe 1',
          image: '/test-image-1.jpg',
          rating: 4.5,
        },
        {
          id: 2,
          name: 'Test Recipe 2',
          image: '/test-image-2.jpg',
          rating: 4.8
        }
      ]
    };
    
    const setRecipesSpy = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [[], setRecipesSpy]);
    
    fetchMock.mockResponseOnce(JSON.stringify(mockRecipes));

    await act(async () => {
      render(<Home />);
      await new Promise(resolve => setTimeout(resolve, 0)); // Allow useEffect to run
    });

    expect(fetchMock).toHaveBeenCalledWith('/api/recipes');
    expect(setRecipesSpy).toHaveBeenCalledWith(mockRecipes.recipes);
  });
});