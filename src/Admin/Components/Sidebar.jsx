import React from "react";
import { NavLink } from "react-router-dom";
import { destroyAuthAdmin } from "../../redux/async/admin.async";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch()
  // console.log(useRoutes())
  // const {pathname} = useResolvedPath()
  // console.log(pathname)
  let activeStyle = {color: '#ec6b81'};

  return (
    <>
      <div className="shop-sidebar-wrapper mx-3">
        <div className="sidebar-item">
          <h4 className="sidebar-title">Dashboard</h4>
          <div className="sidebar-body">
            <div className="category-sub-menu">
              <ul>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/admin"
                  >
                    dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar-item mb-40">
          <h4 className="sidebar-title">Manage Category</h4>
          <div className="sidebar-body">
            <div className="category-sub-menu">
              <ul>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to={`main-category`}
                  >
                    Main Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to={`sub-category`}
                  >
                    Sub Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to={`child-category`}
                  >
                    Child Category
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sidebar-item mb-40">
          <h4 className="sidebar-title">Manage Product</h4>
          <div className="sidebar-body">
            <div className="category-sub-menu">
              <ul>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="product-type"
                  >
                    Product Type
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="product"
                  >
                    Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="product-sku"
                  >
                    Product Sku
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sidebar-item mb-40">
          <h4 className="sidebar-title">Other</h4>
          <div className="sidebar-body">
            <div className="category-sub-menu">
              <ul>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="user"
                  >
                    User
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="order"
                  >
                    Order
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="feedback"
                  >
                    Review
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar-item mb-40">
          <h5 className="text-danger">
            <NavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                dispatch(destroyAuthAdmin());
              }}
            >
              Logout
            </NavLink>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
