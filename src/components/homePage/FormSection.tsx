import React from "react";
import { styled } from "@linaria/react";
import Container from "../common/Container";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { dummyRooms } from "../../utils/data";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const navigation = useNavigate();

  //      When the user will submit the data after clicking the submit btn
  //      This onSubmit function will be called. (data object contains all the data user entered)
  const onSubmit = (data: any) => {
    console.log(data);

    //  If the listing is created successfully

    toast.success("Successfully created!");
    dummyRooms.push({
      ...data,
      id: dummyRooms.length + 1,
    });

    // After successful form creation we'll navigate to the home page
    navigation("/");

    //  We'll reset the form in the success case

    reset({
      title: "",
      description: "",
      beds: "",
      baths: "",
      guests: "",
      price: "",
      imgSrc: "",
      type: "",
    });

    // if there is error
    // toast.error('Error while creating!');
  };

  return (
    <FormSectionContainer>
      <Container>
        <h1>Add A Room</h1>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormInput
              type={"text"}
              {...register("title", {
                required: "You must have to specify the title",
              })}
            />

            {errors?.title?.message && (
              <ErrorMessage>{errors?.title?.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormInput
              {...register("description", {
                required: "You must have to specify the description",
              })}
              type={"text"}
            />

            {errors?.description?.message && (
              <ErrorMessage>{errors?.description?.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel>Number of Beds</FormLabel>
            <FormInput
              type={"number"}
              {...register("beds", {
                required: "You must have to specify the number of Beds",
              })}
            />
            {errors?.beds?.message && (
              <ErrorMessage>{errors?.beds?.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel>Number of Baths</FormLabel>
            <FormInput
              {...register("baths", {
                required: "You must have to specify the number of Baths",
              })}
              type={"number"}
            />
            {errors?.baths?.message && (
              <ErrorMessage>{errors?.baths?.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel>Guests Capacity</FormLabel>
            <FormInput
              {...register("guests", {
                required: "You must have to specify the Guests capacity",
              })}
              type={"number"}
            />
            {errors?.guests?.message && (
              <ErrorMessage>{errors?.guests?.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel>Price Per Night ($)</FormLabel>
            <FormInput
              {...register("price", {
                required: "You must have to specify the price per night",
              })}
              type={"number"}
            />
            {errors?.price?.message && (
              <ErrorMessage>{errors?.price?.message}</ErrorMessage>
            )}
          </FormItem>

          <FormItem>
            <FormLabel>Type</FormLabel>

            <SelectType
              {...register("type", {
                required: "You must have to specify the type",
              })}
              name="type"
              defaultValue={"private"}
              id="type"
            >
              <SelectOption value="private">Private</SelectOption>
              <SelectOption value="shared">Shared</SelectOption>
              <SelectOption value="entire-place">Entire Place</SelectOption>
            </SelectType>

            {errors?.type?.message && (
              <ErrorMessage>{errors?.type?.message}</ErrorMessage>
            )}

          </FormItem>

          <FormItem>
            <FormLabel>Image Link</FormLabel>
            <FormInput
              type={"text"}
              {...register("imgSrc", {
                required: "You must have to specify the Image Url",
                pattern: {
                  value:
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                  message: "Please enter a valid url",
                },
              })}
            />

            {errors?.imgSrc?.message && (
              <ErrorMessage>{errors?.imgSrc?.message}</ErrorMessage>
            )}
          </FormItem>

          <SubmitBtn>Add Listing</SubmitBtn>
        </FormContainer>
      </Container>
    </FormSectionContainer>
  );
};

const FormSectionContainer = styled.div`
  padding: 100px 0;
`;

const FormContainer = styled.form`
  max-width: 600px;
  margin: 3rem auto auto;
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div``;

const FormLabel = styled.label`
  font-size: 20px;
  display: block;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  border: 1px solid #0000ff44;
  padding: 8px 1rem;
  border-radius: 10px;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  color: red;
  margin-top: 8px;
`;

const SubmitBtn = styled.button`
  border-radius: 10px;
  padding: 1rem 2.5rem;
  background: #0000ff44;
  font-weight: bold;
`;

const SelectType = styled.select`
  width: 100%;
  border-radius: 10px;
  padding: 8px 1rem;
  border: 1px solid #0000ff44;
`;

const SelectOption = styled.option`
  font-size: 14px;
  padding: 8px 1rem;
`;

export default FormSection;
