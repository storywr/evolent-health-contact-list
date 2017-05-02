class Api::ContactsController < ApplicationController

  def index
    @contacts = Contact.all
    render status: 200,
    json: @contacts
  end

  def create
    @contact = Contact.create(contact_params)
  end

  def update
    if contact_params[:id] != nil
      @contact = Contact.find(contact_params[:id])
      @contact.update(contact_params)
    else
      @contact = Contact.create(contact_params)
    end
  end

  private

  def contact_params
    params.require(:player).permit(:first_name, :last_name, :email, :phone_number, :status, :id)
  end

end
