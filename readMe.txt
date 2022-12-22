Style Class Guide - 
    Fonts - 
        Color -> ex. .text-primary
        Size -> ex. .font-sm
        Weight -> ex. font-500
    
    Background Colors -
        Color -> ex. .bg-primary
    
    Spacings -
        Margin All Sides -> ex. m-3
        Margin Single Side -> ex. ml-5
        Margin X Axis -> ex. mx-3, mx-auto
        Margin Y Axis -> ex. my-2

        Padding All Sides -> ex. p-3
        Padding Single Side -> ex. pl-5
        Padding X Axis -> ex. px-3
        Padding Y Axis -> ex. py-2

    Layouts -
        Display -> ex. d-flex
        Justify Content -> ex. justify-center
        Align Items -> ex. align-flex-end
        Text Align -> ex. text-center

    Responsive Grid -
        Breakpoints - [xs - 0, sm - 480, md - 768, lg - 992, xl - 1200, xxl - 1400]
        Gaps - Gap[0-5], 0-25px, 5px per step
        Grid Columns - 12
        Container > Row > Content

    Horizontal Line 
        Thickness - light - 1px, medium - 3px, thick - 5px
        ex. hr-light-primary

    Buttons - 
        Type : Filled, Reversed
        ex. btn-primary
        ex. btn-secondary-reversed

    Links -
        ex. link-primary

    Cards -
        Type : Portrait, Landscape
        Structure : 
        card-portrait / card-landscape {
            card-head {
                card-img
            },

            card-body {
                card-title,
                card-details {
                    author,
                    date
                },

                card-text,
                card-buttons {
                    card-button * n
                }
            }
        }

    Modals -
        Types : Large, Medium, Small
        Structure : 
        modal-wrapper {
            modal-large {
                modal-head {
                    modal-title,
                    modal-icon
                },

                modal-body {
                    modal-img * n,
                    modal-text * n
                }

                modal-footer {
                    buttons {
                        modal-button * n
                    }
                }
            }
        }