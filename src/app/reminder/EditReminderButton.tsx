"use client"
import { BiEdit } from "react-icons/bi"
import { useReminderStore } from "./store"
import { useEffect } from "react"

const EditReminderButton = ({handleEditReminder, element}:any) => {

	const { reminder, selectReminder } = useReminderStore()
  const handleClick = () => {
		selectReminder(element)
		handleEditReminder()
	}
	useEffect( () => {
	},[reminder])

	return (
		<>
		<button
					onClick={handleClick}
					className="p-2 m-auto"
				>
					<BiEdit className="hover:text-secondary ease-in-out duration-300"></BiEdit>
				</button>
		</>
	)
}
export default EditReminderButton
