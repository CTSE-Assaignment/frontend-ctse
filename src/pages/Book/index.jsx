import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const BACKEND = "http://localhost:4005"
export default function BookPage() {

  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  
  
const fetchBooks = async() => {
    try {
      const response = await axios.get(`${BACKEND}/trains/`);
      const books = response.data;
      setBooks(books);
      console.log(books)
    } catch (error) {
      console.log(error)
    }
  };

useEffect(()=>{
  fetchBooks()
}, [])
  const sampleTrainData = [
    {
      _id: "1",
      name: "Express Train A",
      departureTime: "08:00 AM",
      arrivalTime: "12:00 PM",
      fromLocation: "Station A",
      toLocation: "Station B",
      date: new Date("2024-04-20"),
      class: "First Class",
      availableSeats: 50,
      totalSeats: 100
    },
    {
      _id: "2",
      name: "Local Train B",
      departureTime: "10:30 AM",
      arrivalTime: "01:30 PM",
      fromLocation: "Station C",
      toLocation: "Station D",
      date: new Date("2024-04-21"),
      class: "Second Class",
      availableSeats: 80,
      totalSeats: 120
    },
    {
      _id: "3",
      name: "Express Train C",
      departureTime: "12:00 PM",
      arrivalTime: "04:00 PM",
      fromLocation: "Station E",
      toLocation: "Station F",
      date: new Date("2024-04-22"),
      class: "First Class",
      availableSeats: 60,
      totalSeats: 100
    },
    {
      _id: "4",
      name: "Local Train D",
      departureTime: "02:30 PM",
      arrivalTime: "05:30 PM",
      fromLocation: "Station G",
      toLocation: "Station H",
      date: new Date("2024-04-23"),
      class: "Second Class",
      availableSeats: 90,
      totalSeats: 120
    },
    {
      _id: "5",
      name: "Express Train E",
      departureTime: "05:00 PM",
      arrivalTime: "09:00 PM",
      fromLocation: "Station I",
      toLocation: "Station J",
      date: new Date("2024-04-24"),
      class: "First Class",
      availableSeats: 70,
      totalSeats: 100
    }
  ];
  

  const handleClick = (selectedTrain)=>{
   
    navigate('/bookTwo', { state: { selectedTrain } })
  }

  return (
    <>
      <Helmet>
        <title>Train Ticket Management System</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-9 bg-white-A700">
        <div className="mx-auto mt-56 flex w-full max-w-[1459px] flex-col items-center gap-[110px] md:gap-[82px] md:p-5 sm:gap-[55px]">
          <div className="flex w-[80%] justify-between gap-5 md:w-full md:flex-col">
            <div className="flex w-[73%] items-center justify-between gap-5 md:w-full sm:flex-col">
              <div className="flex flex-col items-center gap-[9px]">
                <Heading
                  size="md"
                  as="h1"
                  className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-orange-600 text-center !text-white-A700"
                >
                  1
                </Heading>
                <Heading
                  size="md"
                  as="h2"
                  className="text-center !text-orange-600"
                >
                  Train Details
                </Heading>
              </div>
              <div className="flex flex-col items-center gap-[9px]">
                <Heading
                  size="md"
                  as="h3"
                  className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_66"
                >
                  2
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="text-center !text-blue_gray-900_66"
                >
                  Your Details
                </Text>
              </div>
              <div className="flex flex-col items-center gap-[11px]">
                <Heading
                  size="md"
                  as="h4"
                  className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_66"
                >
                  3
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="text-center !text-blue_gray-900_66"
                >
                  Confirmation & Payment
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[11px]">
              <Heading
                size="md"
                as="h5"
                className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_66"
              >
                4
              </Heading>
              <Text
                size="md"
                as="p"
                className="text-center !text-blue_gray-900_66"
              >
                Ticket Summery
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-end gap-[41px] self-stretch">
            <div className="mr-[21px] flex items-start justify-between gap-5 self-stretch md:mr-0">
              <Heading size="xl" as="h2" className="text-center">
                Train Details
              </Heading>
              <div className="mt-[18px] flex gap-5">
                <Button
                  color="gray_200"
                  shape="circle"
                  className="w-[50px] rotate-[180deg] !rounded-[25px]"
                >
                  <Img src="images/img_arrow_left.svg" />
                </Button>
                <Button shape="circle" className="w-[50px] !rounded-[25px]">
                  <Img src="images/img_arrow_right.svg" />
                </Button>
              </div>
            </div>
            <div className="relative h-[439px] self-stretch pr-[11px]">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full rounded-[24px] border border-solid border-gray-200">
              <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>name</th>
            <th>departureTime</th>
            <th>arrivalTime</th>
            <th>fromLocation</th>
            <th>toLocation</th>
            <th>date</th>
            <th>class</th>
            <th>availableSeats</th>
            <th>totalSeats</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(train => (
            <tr key={train._id}>
           
              <td>{train.name}</td>
              <td>{train.departureTime}</td>
              <td>{train.arrivalTime}</td>
              <td>{train.fromLocation}</td>
              <td>{train.toLocation}</td>
              <td>{train.date.toString()}</td>
              <td>{train.class}</td>
              <td>{train.availableSeats}</td>
              <td>{train.totalSeats}</td>
              <td>
                <Button onClick={() => handleClick(train)}>Select</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
              </div>
            </div>
           
          </div>
        </div>
        <footer className="flex items-center justify-center self-stretch bg-blue_gray-900 p-10 sm:p-5">
          <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center justify-center gap-[33px]">
            <div className="h-px w-full self-stretch bg-white-A700_19" />
            <div className="flex flex-col gap-8 self-stretch">
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="flex flex-col items-start gap-5">
                  <Heading
                    size="md"
                    as="h5"
                    className="!font-extrabold !text-white-A700"
                  >
                    Home
                  </Heading>
                  <div className="flex flex-col items-start gap-3.5">
                    <a href="Home" target="_blank" rel="noreferrer">
                      <Heading as="h6" className="!text-white-A700">
                        Home
                      </Heading>
                    </a>
                    <a href="#">
                      <Heading as="h6" className="!text-white-A700">
                        About Us
                      </Heading>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-5">
                  <Heading
                    size="md"
                    as="h5"
                    className="!font-extrabold !text-white-A700"
                  >
                    Help
                  </Heading>
                  <a href="#">
                    <Heading as="h6" className="!text-white-A700">
                      Terms of Use
                    </Heading>
                  </a>
                </div>
                <div className="flex w-[53%] items-start justify-between gap-5 md:w-full sm:flex-col">
                  <div className="flex w-[44%] flex-col items-start gap-5 sm:w-full">
                    <Heading
                      size="md"
                      as="h5"
                      className="!font-extrabold !text-white-A700"
                    >
                      Contacts
                    </Heading>
                    <div className="flex flex-col gap-[19px] self-stretch">
                      <div className="flex items-center gap-2.5">
                        <Img
                          src="images/img_ci_location.svg"
                          alt="cilocation_one"
                          className="h-[24px] w-[24px]"
                        />
                        <Heading
                          as="h6"
                          className="w-[92%] leading-[26px] !text-white-A700"
                        >
                          <>
                            Sri Lanka Railways Headquarters,
                            <br />
                            Colombo 10 , Sri Lanka
                          </>
                        </Heading>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Img
                          src="images/img_clarity_phone_handset_solid.svg"
                          alt="clarityphone"
                          className="h-[24px] w-[24px] self-start"
                        />
                        <Heading as="h6" className="!text-white-A700">
                          +94 11 4 600 111
                        </Heading>
                      </div>
                      <div className="flex items-center gap-2.5 self-center pr-[29px] sm:pr-5">
                        <Img
                          src="images/img_fluent_mail_16_filled.svg"
                          alt="fluentmailsixte"
                          className="h-[24px] w-[24px] self-start"
                        />
                        <Heading as="h6" className="self-end !text-white-A700">
                          srilankarailway@gmail.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-5">
                    <Heading
                      size="md"
                      as="h5"
                      className="!font-extrabold !text-white-A700"
                    >
                      Social Media
                    </Heading>
                    <div className="flex gap-5 self-start">
                      <Button shape="square" className="w-[50px]">
                        <Img src="images/img_ant_design_twit.svg" />
                      </Button>
                      <Button shape="square" className="w-[50px]">
                        <Img src="images/img_entypo_social_f.svg" />
                      </Button>
                      <Button shape="square" className="w-[50px]">
                        <Img src="images/img_ant_design_twit_orange_600.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-white-A700_19" />
            </div>
            <Text as="p" className="text-center !text-white-A700">
              ©2022 Sri Lanka Railways (SLR). All rights Reserved Sri Lanka
              Railways
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
