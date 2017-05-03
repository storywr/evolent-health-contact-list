class Api::ContactsController < ApplicationController

  def index
    contacts = Contact.all
    render status: 200,
    json: contacts
  end

  def create
    contact = Contact.create(contact_params)
  end

  def update
    contact = Contact.find(contact_params[:id])
    contact.update(contact_params)
  end

  def destroy
    contact = Contact.find(contact_params[:id])
    contact.destroy
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :email, :phone_number, :status, :id)
  end

end
