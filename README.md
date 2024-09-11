# speedyai-assign
Designing a Dashboard for Streamify Service to understand the user trends
Tech Used: ReactJS (Vite) Tailwindcss Shadcn UI Accertinity Ui

#The navbar section
Home Metrics(key Metrics) Data(containing the graphs) Table

#Then I wanted to have a Hero section 
A welcome section with some sparkling effect UI 

#Content Section
The different ways to understand the userbase of Streamify
- Key Metrics: 5 cards comprising of different types of data.
               Did Some changes to the card component to have arguments and use the same card component without making new file for each card

- Data Visulaisation: Graphs indicating different types of data metrics
                    1. Bar Chart for the active users and the corresponding month
                    2. Pie Chart to understand different streams of revenue and the revenue achieved
                    3. Line Chart for the top 5 streamed songs
- Data Table:   Containing Song Name,Artist,	Date Streamed,	Stream Count and	User ID
                Also the sorting and filtering logic for date streamed and stream count also filter by name of artist and song

Tried using same components with different data for optimization and to decrease the load time
A Footer Section containing links to the github repo and my socials
All the Data is hard coded
