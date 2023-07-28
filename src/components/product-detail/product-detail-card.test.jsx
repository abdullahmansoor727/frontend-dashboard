// Generated by CodiumAI

describe('ProductDetailCard_class', () => {
  // Tests that clicking the back button navigates to the correct page
  it('test_clicking_back_button_navigates_to_correct_page', () => {
    // Mock the useNavigate hook
    const mockNavigate = jest.fn();
    jest.mock('react-router', () => ({
      useNavigate: () => mockNavigate
    }));

    // Render the ProductDetailCard component
    const wrapper = mount(<ProductDetailCard />);

    // Simulate a click on the back button
    wrapper.find(StyledButton).simulate('click');

    // Expect the navigate function to be called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/products');
  });

  // Tests that clicking the back button navigates to the products page
  it('test_click_back_navigates_to_products', () => {
    const navigate = jest.fn();
    const props = {
      isLoading: false,
      error: null,
      detail: {
        id: 1
      }
    };
    render(<ProductDetailCard {...props} />, {
      wrapper: ({ children }) => <Router>{children}</Router>
    });
    fireEvent.click(screen.getByRole('button'));
    expect(navigate).toHaveBeenCalledWith('/products');
  });
  // Tests that the ProductDetailCard component renders a card with correct content
  it('test_renders_card_with_correct_content', () => {
    const props = {
      isLoading: false,
      error: null,
      detail: {
        id: 1,
        name: 'Product 1',
        description: 'This is product 1',
        price: 10
      }
    };
    const wrapper = shallow(<ProductDetailCard {...props} />);
    expect(wrapper.find(StyledCard)).toHaveLength(1);
    expect(wrapper.find(StyledButton)).toHaveLength(1);
    expect(wrapper.find(CardContent)).toHaveLength(1);
    expect(wrapper.find(CardContent).props()).toEqual(props);
  });
});